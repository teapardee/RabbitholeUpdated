import React from "react";
import axios from "axios";

export default class Tiles extends React.Component {
  constructor(props) {
    super();
    this.state = {
      articles: [],
      url: "http://localhost:8000/api/rabbithole/"
    };
  }

  async fetchArticles() {
    if (this.props.match.params.id !== undefined) {
      await this.setState({
        url:
          "http://localhost:8000/api/rabbithole/?category=" +
          this.props.match.params.id
      });
    } else {
    }

    axios.get(this.state.url).then(res => {
      var resArr = [];
      var data = res.data;
      data.forEach(function(item) {
        var i = resArr.findIndex(x => x.category === item.category);
        if (i <= -1) {
          resArr.push({ category: item.category });
        }
      });
      this.setState({
        articles: resArr
      });
    });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();
    }
  }

  render() {
    const categories = this.state.articles;
    const listData = categories.map(categories => (
      <a
        className='tile'
        href={"http://localhost:3000/" + categories.category}
        id={categories.category}
        key={categories.category}
      >
        {categories.category}
      </a>
    ));
    return <div>{listData}</div>;
  }
}
