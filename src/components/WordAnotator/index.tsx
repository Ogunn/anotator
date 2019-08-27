import React from "react";
import { Annotator, WORD_TOKENIZER, Annotation, AnnotatedText } from "anotejs";
import LabelList from "../LabelList";

interface IProps {
  id: string;
  text: string;
  labels: string[];
}

interface IState {
  annotations: Annotation[];
  isLabelPickerVisible: boolean;
  currentLabel: string | null;
}

class WordAnotator extends React.Component<IProps, IState> {
  private labelSelected = (label: string | null) => {};

  constructor(props: IProps) {
    super(props);
    this.state = {
      annotations: [],
      isLabelPickerVisible: false,
      currentLabel: null
    };
    this.labelSelected = () => {};
  }

  get id() {
    return `WordAnnotator-text-${this.props.id}`;
  }

  componentDidMount() {
    Annotator.install({
      tokenizer: WORD_TOKENIZER,
      elem: document.getElementById(this.id) as HTMLElement,
      onUpdate: (annotatedText: AnnotatedText, annotations: Annotation[]) => {
        this.setState({ annotations: annotations });
        console.log(annotatedText);
      },
      onSelected: (label, labelSelected) => {
        this.setState({
          isLabelPickerVisible: true,
          currentLabel: label
        });
        this.labelSelected = labelSelected;
      },
      onSelectionVanished: () => {
        this.setState({
          isLabelPickerVisible: false
        });
      }
    });
  }

  labelClicked = (label: string | null) => {
    this.labelSelected(label);
    this.setState({
      isLabelPickerVisible: false
    });
  };

  render() {
    return (
      <div className="WordAnnotator">
        {this.state.isLabelPickerVisible ? (
          <LabelList
            labels={this.props.labels}
            selected={this.state.currentLabel}
            onLabelClicked={this.labelClicked}
          />
        ) : (
          ""
        )}

        <div className="textArea" id={this.id}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default WordAnotator;
