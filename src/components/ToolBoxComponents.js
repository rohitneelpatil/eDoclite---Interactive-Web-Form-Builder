/**
 * Created by parikhv on 3/14/16.
 */
import React from 'react';
import { FormControls, Select, Input, Button, ButtonToolbar,Label } from 'react-bootstrap';

/**
 * This function provides the TextLabel component for toolbox.
 */
export const TextLabel = (props) => {
    return (
        <div className="form-horizontal">
            {props.elements.map((obj, key) => {
                return (<FormControls.Static {...obj} key={key} wrapperClassName="col-md-8"/>);
            })}
        </div>
    );
};

TextLabel.defaultProps = {
    elements: [
        {
            label: "Label",
            value: "Sample label"
        }
    ],
    selectedElement: 0
};

/**
 * This function provides the ButtonGroup component for toolbox.
 */
export const ButtonGroup = (props) => {
    return (
        <ButtonToolbar>
            {props.elements.map((obj, key) =>{
                return (<Button bsStyle={obj.bsStyle.value} bsSize={obj.bsSize.value} key={key}>{obj.label}</Button>);
            })}
        </ButtonToolbar>
    );
};

ButtonGroup.defaultProps = {
    elements: [
        {
            label: "Button1",
            bsStyle: {
                value: "default",
                options: ["default", "danger", "info", "primary", "success", "warning"]
            },
            bsSize: {
                value: "small",
                options: ["default", "large", "small", "xsmall"]
            }
        },
        {
            label: "Button2",
            bsStyle: {
                value: "danger",
                options: ["default", "danger", "info", "primary", "success", "warning"]
            },
            bsSize: {
                value: "large",
                options: ["default", "large", "small", "xsmall"]
            }
        }
    ],
    selectedElement: 0
};

export const RadioButton = (props) => {
    return (
        <div>
            {props.elements.map( (obj, objKey) => {
                return (
                    <Input key={objKey} label={obj.label}>
                        {obj.options.map( (opt, optKey) => {
                            return (
                              <div key={optKey}>
                                <label key={optKey}>
                                  <input type="radio" value={opt.value}{...obj} key={optKey} /> { opt.label }
                                </label>
                              </div>
                            );
                        })}
                   </Input>
                );
            })}

        </div>
    );
};

RadioButton.defaultProps = {
    elements: [
        {
            name: "RadioButtonSet",
            label: "RadioButtonSet",
            options:[
                {
                  label:"A",
                  value:"AA"
                },
                {
                  label:"B",
                   value:"BB"
                },
                {
                   label:"C",
                   value:"CC"
                }
            ],
            bsSize: {
                value: "large",
                options: ["default", "large", "small", "xsmall"]
            },
            wrapperClassName:"col-sm-offset-2 col-sm-2"
        }
    ],
    selectedElement: 0

};

/**
 * This function provides the text box component for toolbox.
 */
export const TextBox = (props) => {
    return(
        <div>
            {props.elements.map( (obj, objKey) => {
                return (<Input type='text' {...obj} key={objKey} bsSize={obj.bsSize.value}/>);
            })}
        </div>
    );
};

TextBox.defaultProps = {
    elements: [
        {
            label: 'Text Box',
            placeholder: 'Some Text',
            bsSize: {
                value: "medium",
                options: ["default", "large", "medium", "small"]
            }
        }
    ],
    selectedElement: 0

};

/**
 * This function provides the Button component for toolbox.
 */
export const Btn = (props) => {
    return (
        <div>
            {props.elements.map( (obj, objKey) => {
                return (<Button {...obj} key={objKey} bsStyle={obj.bsStyle.value} bsSize={obj.bsSize.value}/>);
            })}
        </div>
    );
};

Btn.defaultProps = {
    elements: [
        {
            children: "Button",
            bsStyle: {
                value: "default",
                options: ["default", "danger", "info", "primary", "success", "warning"]
            },
            bsSize: {
                value: "small",
                options: ["default", "large", "small", "xsmall"]
            }
        }
    ],
    selectedElement: 0

};

/**
 * This function provides the text area component for toolbox.
 */
export const TextArea = (props) => {
    return (
        <div>
            {props.elements.map( (obj, objKey) => {
                return (<Input type="textarea" {...obj} key={objKey} bsSize={obj.bsSize.value}/>);
            })}
        </div>

    );
};

TextArea.defaultProps = {
    elements: [
        {
            name: "description",
            placeholder: "This is a description",
            label: "Text Area",
            bsSize: {
                value: "default",
                options: ["default", "large", "medium", "small"]
            }

        }
    ],
    selectedElement: 0
};

/**
 * This function provides the drop down component for toolbox.
 */
export const Dropdown = (props) => {
    return (
        <div>
            {props.elements.map( (obj, objKey) => {
                return (
                  <Input type="select" {...obj} key={objKey} bsSize={obj.bsSize.value}>
                    {obj.options.map((opt,optKey) => {
                        return  (<option value={opt.value} key={optKey}>{opt.label}</option>);
                    })}
                  </Input>
              );
            })}
        </div>

    );
};

Dropdown.defaultProps = {
    elements: [
        {
            label: "Dropdown Menu",
            options:[
                {
                  label:"A",
                  value:"AA"
                },
                {
                  label:"B",
                   value:"BB"
                },
                {
                   label:"C",
                   value:"CC"
                }
            ],
            bsSize: {
                value: "medium",
                options: ["default", "large", "medium", "small"]
            }

        }
    ],
    selectedElement: 0
};

/**
 * This function provides the navigation link component for toolbox.
 */
export const Link = (props) => {
    return (
    <div>
        {props.elements.map( (obj, objKey) => {
            return (<a {...obj} key={objKey} />);
        })}
    </div>
);
};

Link.defaultProps = {
    elements: [
        {
            label: "Link",
            href: "http://www.google.com/",
            children: "Google"
        }
    ],
    selectedElement: 0

};

/**
 * This function provides the checkbox component for toolbox.
 */

export const Checkbox = (props) => {

    return (
    <div>
        {props.elements.map( (obj, objKey) => {

            return (<Input key={objKey}>
                <h3><Label>{obj.textLabel}</Label></h3>
                    {obj.options.map( (opt, optKey) => {
                        return <div key={optKey}><Input type="checkbox"  {...obj}  label={opt.label} value={opt.value} checked readOnly /></div>
                    })}
                </Input>
            );
        })}

    </div>
  )
}

Checkbox.defaultProps = {
  elements: [
      {
        options:[
            {
              label:"Checkbox1",
              value:"AA"
            },
            {
              label:"Checkbox2",
               value:"BB"
            },
            {
               label:"Checkbox3",
               value:"CC"
            }
        ],
        textLabel : "CheckboxLabel"
      }
  ],
  selectedElement: 0,
};


/**
 * This function provides the year component for toolbox.
 */
export const yearComponent = (props) => {

    let minyear =  new Date().getFullYear();
    console.log(minyear);
    let maxyear = minyear + 5;

    let yearArray = [];

    for (let i = minyear; i<=maxyear; i++){
      yearArray.push(i);}

return (
    <div>
        {props.elements.map( (obj, objKey) => {
            return (<Input type="select" {...obj} bsSize={obj.bsSize.value} key={objKey}>
                {yearArray.map((opt,optKey) => {
                    return  (<option value={opt}  key={optKey}>{opt}</option>)
                })}
            </Input>);
        })}
    </div>
  )
}

yearComponent.defaultProps = {
    elements: [
        {
            label: "Year Menu",
            bsSize: {
                value: "medium",
                options: ["default", "large", "small", "xsmall"]
            }

        }
    ],
    selectedElement: 0
};
