import jwt_decode from "jwt-decode";
export const decode = () => {
    const token = localStorage?.getItem("token")

    if (token) {
        var decoded = jwt_decode(token);
        return decoded
    } else {
        return ""
    }
}