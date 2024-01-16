import { api } from "./api";

export async function registerUser(data) {
    const result = await api.post("/register", data);
    sessionStorage.setItem("token", JSON.stringify(result.data.accessToken));
}

export async function loginUser(data) {
    const result = await api.post("/login", data);
    sessionStorage.setItem("token", JSON.stringify(result.data.accessToken));
}

export async function getProfile() {
    const token = JSON.parse(sessionStorage.getItem("token"));

    if (!token) {
        return null;
    }

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    try {
        const result = await api.get("/profile", { headers });
        return result.data;
    } catch (error) {
        console.error("Error fetching profile:", error);
        throw error;
    }
}
