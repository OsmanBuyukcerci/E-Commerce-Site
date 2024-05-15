const page = () => {
  return (
    <div className="p-2">
      <div className="w-full text-center font-bold text-3xl mt-4 mb-2">
        Sign In
      </div>
      <form
        id="sign-in-form"
        className="flex flex-col rounded-lg px-8 py-8 space-y-4 shadow-md"
      >
        <div
          id="name-input-fields"
          className="flex gap-4 *:ring-1 *:ring-black *: *:rounded-lg *:p-3 *:required"
        >
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
          ></input>
          <input
            id="surname"
            name="surname"
            type="text"
            placeholder="Surname"
            required
          ></input>
        </div>
        <div className="w-full">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            className="w-full ring-1 ring-black rounded-lg p-3"
            required
          ></input>
        </div>
        <div className="flex flex-col gap-4 *:w-full *:rounded-lg *:p-3 *:ring-1 *:ring-black">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
          ></input>

          <input
            id="password-again"
            name="password-again"
            type="password"
            placeholder="Password Again"
          ></input>
        </div>
        <div className="w-full flex gap-4 items-center justify-end">
          <a href="/accounts/login" className="text-sm text-blue">
            Do you have a account? Login!
          </a>
          <button
            type="submit"
            id="submit-button"
            name="submit-button"
            className="w-1/6 py-2 bg-green hover:bg-dgreen rounded-lg font-bold"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
