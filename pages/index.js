import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { sanityClient } from "../sanity";
import { useEffect, useState } from "react";
import Category from "../components/Category";
import LanguageSelect from "../components/LanguageSelect";
import Hero from "../components/Hero";
import Icon from "../components/Icon";
import CategoryCard from "../components/CategoryCard";
import CategorySlider from "../components/CategorySlider";

export default function Home({ response, template }) {
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
                  descriptionEs: subCategory.descriptionEs,
                  descriptionEn: subCategory.descriptionEn,
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
          icon: category.icon.name,
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <link rel="icon" href="/casantonella-icon.webp" />
      </Head>

      <main className={styles.main}>
        <LanguageSelect
          setSelectedLanguage={setSelectedLanguage}
          selectedLanguage={selectedLanguage}
          template={template}
        />
        <Hero />
        <CategorySlider
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          hoveredCategory={hoveredCategory}
          setHoveredCategory={setHoveredCategory}
          selectedLanguage={selectedLanguage}
          data={data}
          template={template}
        />
        <div className="line" />
        {data.map((category) => {
          if (category.id === selectedCategory)
            return (
              <Category
                key={category.id}
                category={category}
                selectedLanguage={selectedLanguage}
                template={template}
              />
            );
        })}
        <div className={styles.notesContainer}>
          <p>
            *Todos los precios están en pesos mexicanos e incluyen impuestos.
          </p>
          <p>*En productos crudos, el comensal es responsable de su consumo</p>
        </div>
        <p style={{ margin: "auto", color: "grey" }}>
          Powered by <b>tectify.io</b>
        </p>
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
