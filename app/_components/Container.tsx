import classNames from "classnames";
import { FC, ReactNode } from "react";

interface TContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<TContainerProps> = (props) => {
  const { children, className } = props;

  return (
    <div
      className={classNames(
        "px-6 mx-auto container",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
