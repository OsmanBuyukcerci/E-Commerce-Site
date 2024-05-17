"use client";
const page = () => {
  const onlyNum = (event: any) => {
    let value = event.target.value;
    event.target.value = value.replace(/\D/g, "");
  };
  return (
    <div className="flex">
      <div className="grid grid-cols-2 gap-8">
        <div id="input-card">
          <form className="flex flex-col space-y-4 p-4 shadow-xl rounded-lg">
            <div className="flex flex-col gap-2 p-2">
              <div>
                <p>Card No</p>
              </div>
              <div className="flex gap-4 *:ring-1 *:ring-black *:py-1 *:w-20 *:text-center w-full">
                <input
                  type="text"
                  maxLength={4}
                  onChange={(e) => {
                    onlyNum(e);
                  }}
                ></input>
                <input
                  type="text"
                  maxLength={4}
                  onChange={(e) => {
                    onlyNum(e);
                  }}
                ></input>
                <input
                  type="text"
                  maxLength={4}
                  onChange={(e) => {
                    onlyNum(e);
                  }}
                ></input>
                <input
                  type="text"
                  maxLength={4}
                  onChange={(e) => {
                    onlyNum(e);
                  }}
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <div>
                <p>Name on Card</p>
              </div>
              <div>
                <input
                  className="w-full py-1 px-2 ring-1 ring-black"
                  maxLength={50}
                ></input>
              </div>
            </div>
            <div className="flex gap-2 p-2">
              <div className="flex flex-col">
                <div>
                  <p>CVV</p>
                </div>
                <div>
                  <input
                    type="text"
                    maxLength={3}
                    className="ring-1 ring-black w-20 py-1 text-center"
                    onChange={(e) => {
                      onlyNum(e);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex flex-col w-full items-end">
                <div>
                  <p>Expiry Date</p>
                </div>
                <div>
                  <input type="date"></input>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div
          id="card-preview"
          className="bg-gray rounded-lg relative *:text-white *:font-bold"
        >
          <div className="absolute left-12 top-24">
            <img
              src="https://cdn-icons-png.freepik.com/512/6404/6404100.png"
              className="w-12"
            ></img>
          </div>
          <div id="card-no-preview" className="absolute left-12 top-40">
            <span className="text-lg ">1238 1287 1234 1234</span>
          </div>
          <div id="name-preview" className="absolute left-12 bottom-6">
            Osman BÜYÜKÇERÇİ
          </div>
          <div className="absolute flex gap-2 left-40 top-48">
            <div className="flex flex-col text-sm">
              <span>VALID</span>
              <span>THRU</span>
            </div>
            <div>12/34</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
