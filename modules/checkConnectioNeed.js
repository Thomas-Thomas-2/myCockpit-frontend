const checkConnectionNeed = async (router) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me`,
      {
        method: "GET",
        credentials: "include",
      },
    );

    const data = await response.json();

    if (!data.result) {
      router.replace("/");
    } else {
      router.replace("/dashboard");
      return data;
    }
  } catch (error) {
    console.error("Server error", error);
  }
};

module.exports = { checkConnectionNeed };
