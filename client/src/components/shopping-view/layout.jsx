import { Outlet } from "react-router-dom";

const ShoppingLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ShoppingLayout;
