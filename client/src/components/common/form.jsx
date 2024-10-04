/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line react/prop-types, no-unused-vars


import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

const Form = ({formControl=[], formData ,setFormData,onSubmit ,isButtonDisabled,buttonText}) => {
    const inputbaseddata=(e)=>{
        let element=null;
        const value=formData[e.name] || '';
        switch(e.type){
            case 'input':
                element=(
                    <Input
                    name={e.name}
                    placeholder={e.placeholder}
                    value={value}
                    type={e.type}
                    onchange={(z)=>
                        setFormData({...formData,[e.name]:z.target.value})
                    }
                    
                    
                    />
                )
                break;

            case 'select':
                element=(
                    <Select  >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={e.label}  />
                                

                            
                        </SelectTrigger>

                        <SelectContent>
              {e.options && e.options.length > 0
                ? e?.options?.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
                    </Select>
                );
                break;
            case 'textarea':
                element = (
                    <Textarea
                        name={e.name}
                        placeholder={e.placeholder}
                    value={value}
                    type={e.type}

                    onchange={(z)=>{
                        setFormData({...formData,[e.name]:z.target.value})
                    }}
                    
                    />
                )
                break;
                default:
                    element = (
                      <Input
                        name={e.name}
                        placeholder={e.placeholder}
                        id={e.name}
                        type={e.type}
                        value={value}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            [e.name]: event.target.value,
                          })
                        }
                      />
                    );
                    break;

        }


        return element;
        

       

           
    }
    return(
        <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControl.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {inputbaseddata(controlItem)}
          </div>
        ))}
      </div>
      <Button disabled={isButtonDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
    )
}

export default Form;