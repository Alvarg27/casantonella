import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { sanityClient } from "../sanity";
import { useEffect, useState } from "react";
import Category from "../components/Category";

export default function Home({ response }) {
  const [selectedCategory, setSelectedCategory] = useState();
  const [hoveredCategory, setHoveredCategory] = useState();
  const [data, setData] = useState([]);

  const sortResponse = () => {
    const categoryArr = [];
    response.map((category) => {
      const subCategoryArr = [];
      if (category._type === "mainCategory") {
        response.map((subCategory) => {
          if (subCategory._type === "subCategory") {
            subCategory.mainCategories.map((mainCategory) => {
              if (mainCategory._ref === category._id) {
                const productsArr = [];
                response.map((product) => {
                  if (product._type === "products") {
                    product.subCategories.map((productCat) => {
                      if (productCat._ref === subCategory._id) {
                        productsArr.push({
                          id: product._id,
                          title: product.titleEs,
                          description: product.descriptionEs,
                          price: product.price,
                        });
                      }
                    });
                  }
                });
                subCategoryArr.push({
                  id: subCategory._id,
                  title: subCategory.title,
                  products: productsArr,
                });
              }
            });
          }
        });
        categoryArr.push({
          id: category._id,
          title: category.title,
          subCategories: subCategoryArr,
        });
      }
    });
    setData(categoryArr);
  };

  useEffect(() => {
    sortResponse();
  }, []);

  console.log(data);
  return (
    <div className={styles.home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.categoriesContainer}>
          {data.map((category) => {
            return (
              <div
                className={styles.categoryCard}
                onClick={() => setSelectedCategory(category.id)}
                onMouseOver={() => setHoveredCategory(category.id)}
                onMouseOut={() => setHoveredCategory("")}
                style={{
                  background:
                    hoveredCategory === category.id ||
                    selectedCategory === category.id
                      ? "lightgrey"
                      : "",
                }}
              >
                <h3>{category.title}</h3>
              </div>
            );
          })}
        </div>
        {data.map((category) => {
          if (category.id === selectedCategory)
            return <Category key={category.id} category={category} />;
        })}
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*`;
  try {
    const response = await sanityClient.fetch(query);
    return {
      props: {
        response,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
