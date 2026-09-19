const LoginPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <form className="flex flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-4 shadow-md dark:border-zinc-800 dark:bg-zinc-900">
        <input className="border border-zinc-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800" placeholder="Enter your email"></input>
        <input className="border border-zinc-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800" placeholder="Enter your password" type="password"></input>
        <button className="bg-zinc-500 text-white px-4 py-2 rounded hover:bg-zinc-600" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
