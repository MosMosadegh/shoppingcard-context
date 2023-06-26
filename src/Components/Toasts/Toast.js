import React, { useContext } from "react";
import productsContext from "../Contexts/ProductsContext";

export default function Toast() {
  const contextData = useContext(productsContext);

  return (
    <div className="toast-container z-index-3 position-fixed bottom-0 me-4 end-0 mb-4">
      <div
        className={`${
          contextData.isShowToast ? "show" : ""
        } toast align-items-center text-bg-primary`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn-close btn-close-white m-2 "
            onClick={() => {
              contextData.setIsShowToast(false);
            }}
          ></button>
          <div className="toast-body fs-5">محصول با موفقیت به سبداضافه شد</div>
        </div>
      </div>
    </div>
  );
}
