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

function People() {
  const [resources, setResources] = useState<Resource[]>([]);

  async function fetchResources() {
    try {
      const request = await axios.get(
        "https://keep-memories-rest-api.onrender.com/resources",
        {
          headers: {
            Authorization: "",
          },
        }
      );

      const response = request.data;
      setResources(
        response.filter((resource: Resource) => resource.category === "people")
      );
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    fetchResources();
  }, [resources]);

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const imgElement = event.target as HTMLImageElement;
    const photoView = document.querySelector(".photo-view") as HTMLElement;
    const imgPlaceholder = document.querySelector(
      ".img-placeholder"
    ) as HTMLImageElement;
    const resourceAdmin = document.querySelector(
      ".resource_admin"
    ) as HTMLElement;
    const uploadDate = document.querySelector(".upload_date") as HTMLElement;
    const resourceCollectionUl = document.querySelector(
      ".resource_collection_ul"
    ) as HTMLAnchorElement;

    photoView.style.display = "flex";
    imgPlaceholder.src = imgElement.src;

    const foundResource = resources.find(
      (resource) => resource.resource_url === imgElement.src
    );

    if (foundResource) {
      resourceAdmin.textContent = foundResource.resource_admin;
      uploadDate.textContent = foundResource.upload_date as string;
      resourceCollectionUl.href = `/photos/categories/${foundResource.category}`;
    }
  };

  return resources.length > 0 ? (
    <>
      <NavigationBarComponent />
      <br />
      <section className="people">
        <h1>Beautiful photos from people</h1>
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
    <>
      <NavigationBarComponent />
      <div className="img-wrapper">
        <img src="/3363936.webp" alt="" />
        <p>No photos were found, try reloading the page!</p>
        <p>No photos were found!</p>
      </div>
    </>
  );
}

export default People;
