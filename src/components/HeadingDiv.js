import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { IntroDiv, TaglineDiv } from "./HeadingDiv.styles";

import BorderHeader from "./BorderHeader";

const HeadingDiv = () => {
  return (
    <>
      <BorderHeader />
      <IntroDiv>
        <div>
          <span>
            <h2>
              Make the perfect
              <br />
              connection.
            </h2>
            <Link to="/products">
              Shop Mac Accesories
              <object data="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1MS44NDYgNDUxLjg0NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNMzQ1LjQ0MSwyNDguMjkyTDE1MS4xNTQsNDQyLjU3M2MtMTIuMzU5LDEyLjM2NS0zMi4zOTcsMTIuMzY1LTQ0Ljc1LDBjLTEyLjM1NC0xMi4zNTQtMTIuMzU0LTMyLjM5MSwwLTQ0Ljc0NCAgIEwyNzguMzE4LDIyNS45MkwxMDYuNDA5LDU0LjAxN2MtMTIuMzU0LTEyLjM1OS0xMi4zNTQtMzIuMzk0LDAtNDQuNzQ4YzEyLjM1NC0xMi4zNTksMzIuMzkxLTEyLjM1OSw0NC43NSwwbDE5NC4yODcsMTk0LjI4NCAgIGM2LjE3Nyw2LjE4LDkuMjYyLDE0LjI3MSw5LjI2MiwyMi4zNjZDMzU0LjcwOCwyMzQuMDE4LDM1MS42MTcsMjQyLjExNSwzNDUuNDQxLDI0OC4yOTJ6IiBmaWxsPSIjMDA3MGM5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
            </Link>
          </span>
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=470&hei=556&fmt=png-alpha&.v=1604709508000" />
        </div>
      </IntroDiv>
      <TaglineDiv>
        <div>
          <h4>AppleCare+ for Mac</h4>
          <h2>Protect your Mac</h2>
          <p>
            Add three years of coverage with AppleCare+
            <br />
            and get service and support from Apple experts.
          </p>
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-applecare-accessories-202104?wid=1070&hei=239&fmt=jpeg&qlt=95&.v=1620664900000" />
        </div>
      </TaglineDiv>
    </>
  );
};

export default HeadingDiv;
