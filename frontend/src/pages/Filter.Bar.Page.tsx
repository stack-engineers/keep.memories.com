import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { useState } from "react";
import axios from "axios";
import { FaDownload } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import PhotoViewComponent from "../components/Photo.View.Component";

interface Resource {
  id: string;
  resource_url: string;
  category: string;
  resource_admin: string;
  resource_title: string;
  resource_id: string;
  upload_date: string | number;
}

function FilterBar() {
  const [searches, setSearches] = useState([] as Resource[]);
  function handleClick(): void {
    window.location.href = "/";
  }

  return (
    <>
      <NavigationBarComponent />
      <section className={String("filter-bar")}>
        <div className="filter-bar-input-wrapper">
          <input
            type="search"
            name=""
            id="filter-bar-input"
            onInput={async (event) => {
              event.stopPropagation();
              const request = await axios.get(
                "https://keep-memories-rest-api.onrender.com/resources",
                {
                  headers: {
                    Authorization: "",
                  },
                }
              );

              const response = await request.data;

              if ((event.target as HTMLInputElement).value === "") {
                setSearches([]);
              } else {
                setSearches(
                  response.filter((index: Resource) => {
                    return index.resource_title.includes(
                      (event.target as HTMLInputElement).value
                    );
                  })
                );
              }
            }}
            placeholder="search photos here..."
            aria-placeholder="search photos here..."
          />
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              const request = await axios.get(
                "https://keep-memories-rest-api.onrender.com/resources",
                {
                  headers: {
                    Authorization: "",
                  },
                }
              );

              const response = await request.data;

              if (
                (
                  window.document.querySelector(
                    "#filter-bar-input"
                  ) as HTMLInputElement
                ).value === ""
              ) {
                setSearches([]);
              } else {
                setSearches(
                  response.filter((index: Resource) => {
                    return index.resource_title.includes(
                      (
                        window.document.querySelector(
                          "#filter-bar-input"
                        ) as HTMLInputElement
                      ).value
                    );
                  })
                );
              }
            }}
          >
            search
          </button>
        </div>
        <div className="filter-categories">
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              const request = await axios.get(
                "https://keep-memories-rest-api.onrender.com/resources",
                {
                  headers: {
                    Authorization: "",
                  },
                }
              );

              const response = await request.data;
              setSearches(response);
            }}
            style={{
              color: "#fff",
              backgroundColor: "hsl(0, 0%, 20%)",
            }}
          >
            All
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              const request = await axios.get(
                "https://keep-memories-rest-api.onrender.com/resources",
                {
                  headers: {
                    Authorization: "",
                  },
                }
              );

              const response = await request.data;
              setSearches(
                response.filter((index: Resource) => {
                  return index.category === "dark";
                })
              );
            }}
          >
            Dark
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              const request = await axios.get(
                "https://keep-memories-rest-api.onrender.com/resources",
                {
                  headers: {
                    Authorization: "",
                  },
                }
              );

              const response = await request.data;
              setSearches(
                response.filter((index: Resource) => {
                  return index.category === "people";
                })
              );
            }}
          >
            People
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              const request = await axios.get(
                "https://keep-memories-rest-api.onrender.com/resources",
                {
                  headers: {
                    Authorization: "",
                  },
                }
              );

              const response = await request.data;
              setSearches(
                response.filter((index: Resource) => {
                  return index.category === "sports";
                })
              );
            }}
          >
            Sports
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              const request = await axios.get(
                "https://keep-memories-rest-api.onrender.com/resources",
                {
                  headers: {
                    Authorization: "",
                  },
                }
              );

              const response = await request.data;
              setSearches(
                response.filter((index: Resource) => {
                  return index.category === "nature";
                })
              );
            }}
          >
            Nature
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              const request = await axios.get(
                "https://keep-memories-rest-api.onrender.com/resources",
                {
                  headers: {
                    Authorization: "",
                  },
                }
              );

              const response = await request.data;
              setSearches(
                response.filter((index: Resource) => {
                  return index.category === "food";
                })
              );
            }}
          >
            Food
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              const request = await axios.get(
                "https://keep-memories-rest-api.onrender.com/resources",
                {
                  headers: {
                    Authorization: "",
                  },
                }
              );

              const response = await request.data;
              setSearches(
                response.filter((index: Resource) => {
                  return index.category === "illustrations";
                })
              );
            }}
          >
            Illustrations
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              const request = await axios.get(
                "https://keep-memories-rest-api.onrender.com/resources",
                {
                  headers: {
                    Authorization: "",
                  },
                }
              );

              const response = await request.data;
              setSearches(
                response.filter((index: Resource) => {
                  return index.category === "technology";
                })
              );
            }}
          >
            Technology
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              const request = await axios.get(
                "https://keep-memories-rest-api.onrender.com/resources",
                {
                  headers: {
                    Authorization: "",
                  },
                }
              );

              const response = await request.data;
              setSearches(
                response.filter((index: Resource) => {
                  return index.category === "animals";
                })
              );
            }}
          >
            Animals
          </button>
          <button type="button" onClick={handleClick}>
            categories
          </button>
        </div>
        <h1>Beautiful photos from your searches</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque optio
          rem quidem fugiat voluptatum facere deleniti commodi! Debitis nesciunt
          eveniet eius voluptatem illo illum quam.
        </p>
        <br />
        <article>
          {searches.length > 0 ? (
            searches.map((result: Resource) => (
              <article
                className={String("photo_resource")}
                key={result.id}
                title={`Photo uploaded by ${result.resource_admin}`}
              >
                <img
                  src={result.resource_url}
                  alt={`photo from ${result.category}`}
                  onClick={(event) => {
                    (
                      window.document.querySelector(
                        ".photo-view"
                      ) as HTMLElement
                    ).style.display = "flex";
                    (
                      window.document.querySelector(
                        ".img-placeholder"
                      ) as HTMLImageElement
                    ).src = (event.target as HTMLImageElement).src;
                    const FoundResource: Resource = searches.find(
                      (index: Resource) => {
                        return (
                          index.resource_url ===
                          (event.target as HTMLImageElement).src
                        );
                      }
                    )!;
                    (
                      window.document.querySelector(
                        ".resource_admin"
                      ) as HTMLElement
                    ).textContent = FoundResource.resource_admin;
                    (
                      window.document.querySelector(
                        ".upload_date"
                      ) as HTMLElement
                    ).textContent = result.upload_date as string;
                  }}
                />
                <div className={String("photo-details")}>
                  <section>
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolores asperiores? Sed consectetur esse tempore animi facilis perspiciatis, nesciunt laboriosam.</p> */}
                    <aside>
                      <a href="" download={String(result.resource_url)}>
                        <button type="button" className={String("")}>
                          <FaDownload />
                        </button>
                      </a>
                      <button type="button" className={String("")}>
                        <FaHeart />
                      </button>
                    </aside>
                  </section>
                </div>
              </article>
            ))
          ) : (
            <div className="warning-results-message">
              <img src="/search_webp.jpg" alt="photo" className="search_webp" />
              {/* <p className="search-results-message">There are no search results!</p> */}
            </div>
          )}
          <PhotoViewComponent />
        </article>
      </section>
      <FooterComponent />
    </>
  );
}

export default FilterBar;
