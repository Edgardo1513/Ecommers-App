
const getConfing = () => (
    {
        Headers : {
            Authorization : `Bearer token ${localStorage.getItem("token")}`
        }
    }
)

export default getConfing