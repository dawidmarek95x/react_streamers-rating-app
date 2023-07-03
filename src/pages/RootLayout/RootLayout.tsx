import { Spinner } from "@material-tailwind/react";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div className="p-5">
      <Header />
      <main>
        <Suspense
          fallback={
            <Spinner
              color="gray"
              className="w-14 h-14 text-accent mx-auto my-4"
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default RootLayout;
