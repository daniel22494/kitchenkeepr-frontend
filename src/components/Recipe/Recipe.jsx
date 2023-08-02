import { useEffect, useState } from "react";
import axios from "axios";
import "./Recipe.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import Delete from "../../assets/icons/delete.png";
import { Modal } from "@mui/material";

function Recipe() {
  const [recipeCard, setRecipeCard] = useState([]);
  //modal states
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://kitchenkeepr-d3710e35161a.herokuapp.com/recipes/${id}`)
      .then(({ data }) => {
        setRecipeCard(data);
        console.log(data);
        return data;
      });
  }, []);

  const navigate = useNavigate();

  function handleDelete() {
    // Assuming recipeCard contains the details of the recipe to be deleted
    const recipeIdToDelete = recipeCard.id;

    // Check if the recipe exists in favorites before attempting to delete it
    axios
      .get(
        `https://kitchenkeepr-d3710e35161a.herokuapp.com/favourites/${recipeIdToDelete}`
      )
      .then((response) => {
        // Recipe exists in favorites, show an alert and prevent the delete request
        alert("Recipe is already in favorites.");
      })
      .catch((error) => {
        // If the recipe doesn't exist in favorites, proceed with the delete request
        axios
          .delete(
            "https://kitchenkeepr-d3710e35161a.herokuapp.com/favourites",
            {
              data: { recipe_id: recipeIdToDelete },
            }
          )
          .then(() => {
            setOpen(false);
            // Refresh the page. This allows us to see the new data.
            alert("Recipe Deleted!");
            navigate("/favourites");
          })
          .catch((response) => {
            console.log(response);
          });
      });
  }

  if (!recipeCard) {
    return <div>loading...</div>;
  }

  return (
    <section className="recipe-container">
      <Modal open={open} onClose={handleClose} className="modal">
        <div className="modal-div">
          <h1 className="modal__title">Delete {recipeCard.title} recipe?</h1>
          <p className="modal__text">
            Please confirm that you'd like to delete the {recipeCard.title} from
            the list of favourites. You won't be able to undo this action.
          </p>
          <div className="button-style">
            <div className="modal-button__div">
              <button className="modal-cancel" onClick={handleClose}>
                Cancel
              </button>
              <button className="modal-delete" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="card">
        <div className="card__title">
          <h4 className="card__title-content">{recipeCard.title}</h4>
        </div>
        <div className="card__text">
          <h5 className="card__text-author">Authour: {recipeCard.author}</h5>
          <p className="card__text-caption">
            <pre>{recipeCard.caption}</pre>
          </p>
        </div>
        <div className="card__iframe">
          <iframe
            src={`${recipeCard.link}embed/captioned`}
            className="card__iframe-content"
          ></iframe>
          <h4 className="card__iframe-src">source: {recipeCard.link}</h4>
        </div>
        <div className="replaceLink">
          <Link to="/ingredient-replacer">
            <button className="replaceLink-button">Replace Ingredient</button>
          </Link>
        </div>
        <div className="delete">
          <img
            onClick={handleOpen}
            src={Delete}
            alt=""
            className="delete-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Recipe;
