import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { sanityClient } from "../sanity";
import { useEffect, useState } from "react";
import Category from "../components/Category";
import LanguageSelect from "../components/LanguageSelect";
import Hero from "../components/Hero";

export default function Home({ response }) {
  const [selectedLanguage, setSelectedLanguage] = useState("es");
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
                  let productImage = null;
                  response.map((image) => {
                    if (
                      product.mainImage &&
                      image._type === "sanity.imageAsset" &&
                      product.mainImage.asset._ref === image._id
                    ) {
                      productImage = image.url;
                    }
                  });
                  if (product._type === "products") {
                    product.subCategories.map((productCat) => {
                      if (productCat._ref === subCategory._id) {
                        productsArr.push({
                          id: product._id,
                          titleEs: product.titleEs,
                          titleEn: product.titleEn,
                          descriptionEs: product.descriptionEs,
                          descriptionEn: product.descriptionEn,
                          mainImage: productImage,
                          price: product.price,
                        });
                      }
                    });
                  }
                });
                subCategoryArr.push({
                  id: subCategory._id,
                  titleEs: subCategory.titleEs,
                  titleEn: subCategory.titleEn,
                  products: productsArr.sort((a, b) =>
                    a.titleEs.normalize().localeCompare(b.titleEs.normalize())
                  ),
                });
              }
            });
          }
        });
        categoryArr.push({
          id: category._id,
          titleEs: category.titleEs,
          titleEn: category.titleEn,
          subCategories: subCategoryArr.sort((a, b) =>
            a.titleEs.normalize().localeCompare(b.titleEs.normalize())
          ),
        });
      }
    });
    setData(
      categoryArr.sort((a, b) =>
        a.titleEs.normalize().localeCompare(b.titleEs.normalize())
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
        a.titleEs.normalize().localeCompare(b.titleEs.normalize())
      )[0]._id
    );
  };

  useEffect(() => {
    sortResponse();
    firstCategory();
  }, []);

  console.log(response);

  return (
    <div className={styles.home}>
      <Head>
        <title>Menú | Casa Antonella</title>
        <meta
          name="description"
          content="Menú digital de restaurante Casa Antonella, Antea."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LanguageSelect
          setSelectedLanguage={setSelectedLanguage}
          selectedLanguage={selectedLanguage}
        />
        <Hero />
        <div className={styles.categoriesContainer}>
          {data.map((category) => {
            return (
              <div
                key={category.id}
                className={styles.categoryCard}
                onClick={() => setSelectedCategory(category.id)}
                onMouseOver={() => setHoveredCategory(category.id)}
                onMouseOut={() => setHoveredCategory("")}
              >
                <h3
                  style={{
                    color:
                      hoveredCategory === category.id ||
                      selectedCategory === category.id
                        ? "black"
                        : "grey",
                  }}
                >
                  {selectedLanguage === "es"
                    ? category.titleEs
                    : category.titleEn}
                </h3>
                <h3
                  style={{
                    margin: "auto 5px",
                    fontWeight: "normal",
                    color: "gray",
                  }}
                >
                  |
                </h3>
              </div>
            );
          })}
        </div>
        <div className="line" />
        {data.map((category) => {
          if (category.id === selectedCategory)
            return (
              <Category
                key={category.id}
                category={category}
                selectedLanguage={selectedLanguage}
              />
            );
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
