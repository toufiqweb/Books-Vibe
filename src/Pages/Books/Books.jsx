import React from "react";
import { BookContext } from "../../components/context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListedBooks from "../../components/listedBooks/ReadListedBooks";
import WishListedBooks from "../../components/listedBooks/WishListedBooks";

const Books = () => {
  return (
    <div className="container mx-auto my-10 space-y-5">
      <div>
        <h1 className="text-center">Books</h1>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadListedBooks />
        </TabPanel>
        <TabPanel>
          <WishListedBooks />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
