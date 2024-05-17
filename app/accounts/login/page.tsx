"use client";

const page = () => {
  return (
    <div className="p-2">
      <div className="w-full text-center font-bold text-3xl mt-4 mb-2">
        Login
      </div>
      <form
        id="login-form"
        className="flex flex-col rounded-lg px-8 py-8 space-y-4 shadow-md"
      >
        <div
          id="name-input-fields"
          className="flex flex-col gap-4 *:ring-1 *:ring-black *: *:rounded-lg *:p-3 *:required"
        >
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            required
          ></input>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
          ></input>
        </div>
        <div className="w-full flex gap-4 items-center justify-end">
          <div className="flex gap-2 w-full items-center">
            <input name="remember-me-checkbox" type="checkbox"></input>
            <p>Remember Me</p>
          </div>

          <button
            type="submit"
            id="submit-button"
            name="submit-button"
            className="px-2 py-2 bg-secondary hover:bg-accent active:primary text-white rounded-lg font-bold"
          >
            Login
          </button>
        </div>
        <div className="w-full flex gap-4 items-center">
          <a href="#" className="text-sm text-blue">
            Forgot password?
          </a>
          <a href="/accounts/signin" className="text-sm text-blue">
            Create a account!
          </a>
        </div>
      </form>
    </div>
  );
};

export default page;
