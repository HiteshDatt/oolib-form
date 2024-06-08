const fetchFormSchema = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/form`
    );
    const data = await response.json();
    return data;
};

export {
    fetchFormSchema
};