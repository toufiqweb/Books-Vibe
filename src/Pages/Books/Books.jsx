import React from "react";
import { BookContext } from "../../components/context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListedBooks from "../../components/listedBooks/ReadListedBooks";
import WishListedBooks from "../../components/listedBooks/WishListedBooks";

const Books = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          My Book Collection
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Manage your read and wishlist books
        </p>
      </div>

      <div className="bg-base-200 rounded-2xl shadow-md p-4 sm:p-6 border border-base-300">
        <Tabs>
          <TabList className="flex justify-center gap-2 mb-6 bg-base-300 p-2 rounded-xl w-fit mx-auto">
            <Tab
              className="px-5 py-2 rounded-lg cursor-pointer text-sm font-medium transition"
              selectedClassName="bg-green-500 text-white shadow"
            >
              Read List
            </Tab>

            <Tab
              className="px-5 py-2 rounded-lg cursor-pointer text-sm font-medium transition"
              selectedClassName="bg-green-500 text-white shadow"
            >
              Wish List
            </Tab>
          </TabList>

          <TabPanel>
            <div className="animate-fadeIn">
              <ReadListedBooks />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="animate-fadeIn">
              <WishListedBooks />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
