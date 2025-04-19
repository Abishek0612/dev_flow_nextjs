import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log("session", session);
  return (
    <>
      <h1 className="h1-bold bg-black ">Welcome to home</h1>
    </>
  );
};

export default Home;

// .text-dark100_light900 or .background-light850_dark100
