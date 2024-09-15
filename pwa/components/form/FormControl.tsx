import { FC } from "react";
import { DatePicker } from "../DatePicker";
import { Switch } from "../ui/switch";
import Input from "./Input";
import Label from "./Label";

type FormControlType = {
  type?: string;
  id: string;
  name: string;
  value?: any;
  onChange: (e: any) => void;
  label: string;
  required?: boolean;
  customContainerStyle?: string;
  hint?: string;
};

const FormControl: FC<FormControlType> = ({
  type = "text",
  id,
  name,
  value,
  onChange,
  label,
  required = false,
  customContainerStyle = "",
  hint,
}) => {
  const labelText = required ? (
    label
  ) : (
    <>
      <span>{label}</span>
      <span className="text-xs ml-2">(Facultatif)</span>
    </>
  );

  return (
    <div className={`mb-4 ${customContainerStyle}`}>
      <Label htmlFor={id}>
        {hint ? (
          <>
            <span className="block">{labelText}</span>
            <span className="text-sm">{hint}</span>
          </>
        ) : (
          labelText
        )}
      </Label>
      {type === "date" ? (
        <DatePicker date={value} setDate={onChange} name={name} id={id} />
      ) : type === "switch" ? (
        <Switch id={id} checked={value} onCheckedChange={onChange} />
      ) : type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full"
        ></textarea>
      ) : (
        <Input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};

export default FormControl;
