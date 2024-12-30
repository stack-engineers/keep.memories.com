import NavigationBarComponent from "../../components/Navigation.Bar.Component";
import { useState, useEffect } from "react";
import axios from "axios";
import PhotoViewComponent from "../../components/Photo.View.Component";

interface Resource {
  id: string;
  resource_url: string;
  category: string;
  resource_admin: string;
  resource_title: string;
  resource_id: string;
  upload_date: string | number;
}

function Nature() {
  const [resources, setResources] = useState<Resource[]>([]);

  async function FetchResources() {
    try {
      const request = await axios.get("http://localhost:3500/resources", {
        headers: {
          Authorization: "",
        },
      });

      const response = await request.data;
      setResources(
        response.filter((index: Resource) => index.category === "nature")
      );
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    FetchResources();
  }, []);

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const imgElement = event.target as HTMLImageElement;
    const photoViewElement = document.querySelector(
      ".photo-view"
    ) as HTMLElement;
    const imgPlaceholderElement = document.querySelector(
      ".img-placeholder"
    ) as HTMLImageElement;
    const resourceAdminElement = document.querySelector(
      ".resource_admin"
    ) as HTMLElement;
    const uploadDateElement = document.querySelector(
      ".upload_date"
    ) as HTMLElement;
    const resourceCollectionUlElement = document.querySelector(
      ".resource_collection_ul"
    ) as HTMLAnchorElement;

    photoViewElement.style.display = "flex";
    imgPlaceholderElement.src = imgElement.src;

    const foundResource = resources.find(
      (resource) => resource.resource_url === imgElement.src
    );
    if (foundResource) {
      resourceAdminElement.textContent = foundResource.resource_admin;
      uploadDateElement.textContent = String(foundResource.upload_date);
      resourceCollectionUlElement.href = `/photos/categories/${foundResource.category}`;
    }
  };

  return resources.length > 0 ? (
    <>
      <NavigationBarComponent />
      <br />
      <section className="nature">
        <h1>Beautiful photos from nature</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque optio
          rem quidem fugiat voluptatum facere deleniti commodi! Debitis nesciunt
          eveniet eius voluptatem illo illum quam.
        </p>
        <br />
        <div className="photos">
          {resources.map((resource) => (
            <article
              className="photo_resource"
              key={resource.id}
              title={`${resource.resource_title} uploaded by ${resource.resource_admin}`}
            >
              <img
                src={resource.resource_url}
                alt={`photo from ${resource.category}`}
                onClick={handleImageClick}
              />
              <div className="photo-details">
                <section></section>
              </div>
            </article>
          ))}
        </div>
        <PhotoViewComponent />
      </section>
    </>
  ) : (
    <img src="/3363936.webp" alt="" />
  );
}

export default Nature;