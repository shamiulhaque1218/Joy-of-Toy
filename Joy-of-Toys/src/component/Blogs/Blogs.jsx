// eslint-disable-next-line no-unused-vars
import React from 'react';

const Blogs = () => {
    const QnA = [
        {
          question: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
          answer:
            'An access token is a credential that is issued to a user or an application after they successfully authenticate themselves. It is typically a short-lived token with a limited lifespan, ranging from minutes to hours.Others a refresh token is a long-lived credential that is also issued during the authentication process, along with the access token. Unlike the access token, the refresh token is not included in every request to the protected resource. The client sends a request to the authentication server with user credentials.If the credentials are valid, the authentication server generates an access token and a refresh token.The access token is returned to the client and can be used to access protected resources.We store them in  local storage or session storage and it is risky.But preferably using an HTTP-only cookie.'
        },
        {
          question: 'Compare SQL and NoSQL databases?',
          answer:
            'SQL databases are based on a structured data model with a predefined schema. They use tables to store data, where each table has a fixed number of columns with defined data types.SQL databases use SQL, a standardized language for managing relational databases. SQL provides powerful querying capabilities, including complex joins, aggregation functions, and transaction management.NoSQL databases are schema-less or have a flexible schema, allowing for dynamic and unstructured data models. They can store data in various formats like key-value pairs, documents, graphs, or wide-column stores.NoSQL databases may not use SQL as the primary query language.'
        },
        {
          question: 'What is express js? What is Nest JS ?',
          answer:
            'Express.js is a popular web application framework for Node.js, a runtime environment for executing JavaScript code outside the browser. Express.js provides a robust set of features and utilities that simplify the process of building web applications and APIs.Express.js provides a flexible and intuitive routing system that allows developers to define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) and URLs. NestJS is a progressive, TypeScript-based framework for building efficient and scalable server-side applications. It is inspired by Angular and adopts many of its concepts and design patterns. NestJS leverages the power of TypeScript to provide a structured and modular approach to building server-side applications in Node.js.'
        },
        {
          question: 'What is MongoDB aggregate and how does it work ?',
          answer:
            'MongoDB is basically No SQL database.The MongoDB aggregate operation is used to perform advanced data processing and analysis on collections of documents in MongoDB. It allows for the execution of complex computations, transformations, and aggregations on the data.The aggregate operation takes an array of stages as its input. Each stage represents a step in the data processing pipeline. Documents from the collection are passed through each stage in sequence, with the output of one stage becoming the input for the next stage.MongoDB provides a variety of stages that can be used in an aggregate pipeline. Some commonly used stages include:$match,$project,$group,$sort,$limit,$skip.The aggregate operation returns a cursor that can be iterated to retrieve the final result. The result can include the transformed or aggregated documents, computed values, or other requested information based on the stages applied.'
        }
      ]

    
      return (
        <div className="bg-gray-100 min-h-screen">
          <div className="container mx-auto py-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h1>
            <div className="max-w-2xl mx-auto">
              {QnA.map((qna, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-lg font-medium text-gray-800 mb-2">
                    {qna.question}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{qna.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Blogs;