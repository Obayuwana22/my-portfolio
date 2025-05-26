import HomeLayout from "./components/HomeLayout";

function App() {
  return (
    <div className=" bg-[#000D12] ">
      <div className="pt-5 px-5  xl:px-[120px]">
        <HomeLayout />
      </div>
      <div className="mt-16 text-[#6B6B6B] text-center text-sm border-t-1 border-[#6B6B6B] py-3 xl:text-base xl:py-5">
        Copyrights@2025
      </div>
    </div>
  );
}

export default App;
