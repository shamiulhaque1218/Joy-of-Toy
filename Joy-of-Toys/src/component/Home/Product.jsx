// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Product = () => {
    return (
        
        <div className="py-2 text-center">
         <p className='text-3xl py-12 gFont2'> Product Categories </p>
      <Tabs>
        <TabList>
          <Tab>Teddy Bear</Tab>
          <Tab>Dinosaur Toy</Tab>
          <Tab>Horse Toy</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
    );
};

export default Product;