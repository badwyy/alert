import { X } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";
import { AlertTypes } from "../../types";

interface IProps {
  type: AlertTypes;
  icon: ReactNode; //type >>componenet
  title: string;
  description?: string;  //optional
  children?: ReactNode;
}


        // const Alert = ({title}:{title:string}) => { 
            // const Alert:<Iprops> = (props) => { 
                // const Alert = ({}:Iprops) => {
const Alert = ({ type = "alert-error", icon, title, description, children }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>

        <X className="close" size={20} />
      </div>

      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;