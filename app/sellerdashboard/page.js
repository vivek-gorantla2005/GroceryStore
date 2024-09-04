"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Import the CSS for the toasts
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { storage } from "../config/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Cookie from 'js-cookie'
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()
  const [username, setusername] = useState("")
  const [email, setEmail] = useState("")

  const [loading, setloading] = useState(false)

  useEffect(() => {
    const cookieUser = Cookie.get("user")
    if (cookieUser) {
      try {
        const { username, email } = JSON.parse(cookieUser);
        setusername(username);
        setEmail(email);
        if (email === "23eg105j66@anurag.edu.in") {
          toast.success("Access Granted!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          console.log("Access Denied!");
          toast.error("Access Denied!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setloading(true);
          setTimeout(() => {
            router.push("/login");
          }, 3000);
        }
      } catch (err) {
        console.log("error parsing cookie", err);
      }
    }
  }, [])
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    quantity: "",
    price: "",
  });

  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      const imageName = `${Date.now()}_${image.name}`;
      const imageRef = ref(storage, `images/${imageName}`);
      try {
        await uploadBytes(imageRef, image);
        const imageUrl = await getDownloadURL(imageRef);

        const newProductData = {
          ...productData,
          category,
          image: imageUrl, // Store the Firebase image URL as a string
        };

        // Save the newProductData to your database
        const res = await fetch("/api/addproduct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProductData),
        });

        if (res.ok) {
          toast.success("Product Saved Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else {
          toast.error("Failed to save product. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } catch (error) {
        console.error("Error uploading image: ", error);
        toast.error("Failed to save product. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
      console.log({ ...productData, category, image: null });
    }

    // Reset form
    setProductData({
      title: "",
      description: "",
      quantity: "",
      price: "",
    });
    setImage(null);
    setCategory("");
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (<>
    {loading ? (
      <div className="flex justify-center mt-32 h-screen">
        <ToastContainer />
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-green-600" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ) : (<>
      <div className="flex flex-col items-center p-5">
        <ToastContainer />
        <h1 className="font-bold text-3xl mb-6">Add Products</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Product title"
              value={productData.title}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Product description"
              value={productData.description}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>
          <div className="category mb-4">
            <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
              Category
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{category || "Select Category"}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={category}
                  onValueChange={(value) => setCategory(value)}
                >
                  <DropdownMenuRadioItem value="Fruits">Fruits</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Vegetables">Vegetables</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Beverages">Beverages</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Dairy">Dairy</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Bakery">Bakery</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={productData.quantity}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              value={productData.price}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex flex-col  p-5 mt-20 ml-10">
        <h1 className="font-bold text-3xl mb-6">Edit Past Products</h1>
        {/* Add any additional content or functionality for editing products */}
      </div>
    </>
    )}


  </>
  );
};

export default Page;
