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
                  products: productsArr.sort((a, b) =>
                    a.title.normalize().localeCompare(b.title.normalize())
                  ),
                });
              }
            });
          }
        });
        categoryArr.push({
          id: category._id,
          title: category.title,
          subCategories: subCategoryArr.sort((a, b) =>
            a.title.normalize().localeCompare(b.title.normalize())
          ),
        });
      }
    });
    setData(
      categoryArr.sort((a, b) =>
        a.title.normalize().localeCompare(b.title.normalize())
      )
    );
  };

  const firstCategory = () => {
    const categoryArr = [];
    response.map((category) => {
      if (category._type === "mainCategory") {
        categoryArr.push(category);
      }
    });
    setSelectedCategory(
      categoryArr.sort((a, b) =>
        a.title.normalize().localeCompare(b.title.normalize())
      )[0]._id
    );
  };

  useEffect((sortResponse = sortResponse, firstCategory = firstCategory) => {
    sortResponse();
    firstCategory();
  }, []);

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
                key={category.id}
                className={styles.categoryCard}
                onClick={() => setSelectedCategory(category.id)}
                onMouseOver={() => setHoveredCategory(category.id)}
                onMouseOut={() => setHoveredCategory("")}
                style={{
                  color:
                    hoveredCategory === category.id ||
                    selectedCategory === category.id
                      ? "black"
                      : "grey",
                }}
              >
                <h3>{category.title}</h3>
              </div>
            );
          })}
        </div>
        <div className="line" />
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
