import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      selectedColor: this.props.selectedColor || "yellow",
      emptyColor: this.props.emptyColor || "blue",
      displayColor: this.props.emptyColor || "green",
      post: this.props.passingPost
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.selected) {
      this.setState({ selected: false });
    } else if (!this.state.selected) {
      this.setState({ selected: true });
    }

    let renderedTitle = this.props.title;
    let updatedColor = "";
    if (!this.state.selected) {
      renderedTitle += " [FINISHED]";
      updatedColor = this.state.selectedColor;
    } else if (this.state.selected) {
      renderedTitle = renderedTitle.substring(0, renderedTitle.length);
      updatedColor = this.state.emptyColor;
    }
    this.props.onClick(renderedTitle, updatedColor, this.state.selectedColor, this.state.post);
  }

  render() {
    const { renderCard } = this.props;
    return renderCard(this.handleClick);
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  renderCard: PropTypes.func.isRequired
};
