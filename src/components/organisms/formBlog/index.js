import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createBlog, getBlog, updateBlog } from "../../../config/redux/features/blogSlices";
import { getDate } from "../../../utils/getDate";
import Button from "../../atoms/button";
import Text from "../../atoms/text";
import InputMolecules from "../../molecules/inputMolecules";
import Container from "../../templates/container";

const FormBlog = ({ id }) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    category: "",
    imageUrl: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const { blog } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      getSingleBlog(id);
    } else {
      setEditMode(false);
      setValues({
        title: "",
        description: "",
        category: "",
        imageUrl: "",
      });
    }
  }, [id]);

  const getSingleBlog = async (id) => {
    dispatch(getBlog(id));
    setValues({ ...blog });
  };
  const { title, description, category, imageUrl } = values;

  const options = ["Fashion", "Games", "Sports", "Music", "Travel", "Foods", "Tech"];

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onUploadImage = (event) => {
    setLoading(true);
    const img = event.target.files[0];
    setValues({ ...values, imageUrl: img });
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "qn3j0ime");
    axios
      .post("http://api.cloudinary.com/v1_1/dnkjbabna/image/upload", formData)
      .then((response) => {
        toast.success("Image Uploaded Successfully");
        setValues({ ...values, imageUrl: response.data.url });
        setLoading(false);
      })
      .catch((error) => toast.error("something went wrong!, please try again and refresh the page"));
  };

  const onCategoryChange = (e) => {
    setValues({ ...values, category: e.target.value });
  };

  const inputs = [
    { id: 1, name: "title", type: "text", placeholder: "Enter your blog title", errorMessage: "It Should be have a title", label: "Title", required: true },
    { id: 2, name: "description", type: "textarea", placeholder: "Enter your description", errorMessage: "It should be have a description ", label: "Description", required: true },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && description && category && imageUrl) {
      const currentDate = getDate();
      if (!editMode) {
        const blogData = { ...values, date: currentDate };
        dispatch(createBlog(blogData));
        console.log(blogData);
      } else {
        const editedBlogData = { ...values, date: currentDate };
        dispatch(updateBlog({ id, editedBlogData }));
      }
      setValues({ title: "", description: "", category: "", imageUrl: "" });
      navigate("/");
    }
  };
  return (
    <Container>
      <Text Tag="h3" color="black" size="xl3" weight="bold" className="mb-10 text-center">
        {editMode ? "Edit Blog" : "Create New Blog"}
      </Text>
      <form onSubmit={handleSubmit} className="max-w-lg  mx-auto">
        <div className="mb-4 space-y-4">
          {inputs.map((item) => (
            <InputMolecules value={values[item.name]} key={item.id} {...item} onChange={onChange} />
          ))}
          {!editMode && (
            <label className="block">
              Image
              <input
                type="file"
                required
                onChange={onUploadImage}
                className="block w-1/2 text-sm rounded border border-gray-400 text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#E9ECEF] file:text-[#6C757D] hover:file:bg-violet-100"
              />
            </label>
          )}
          <select required onChange={onCategoryChange} value={category}>
            <option>Please Select Category</option>
            {options.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" disabled={loading}>
          {editMode ? "Update" : loading ? "loading" : "Publish"}
        </Button>
      </form>
    </Container>
  );
};

export default FormBlog;
