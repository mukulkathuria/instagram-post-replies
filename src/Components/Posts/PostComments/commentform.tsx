import React, { Component, ChangeEvent, FormEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { userDto } from '../../../Data/data.dto';
import { Inputs, SendBtn } from './commentform.style';

interface CommentFormProps {
  postid: number;
  users: userDto;
}

interface CommentFormState {
  comments: string;
}

class CommentForm extends Component<CommentFormProps, CommentFormState> {
  constructor(props: CommentFormProps) {
    super(props);
    this.state = {
      comments: ''
    };
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { comments } = this.state;
    this.setState({ comments: '' });
    const { postid, users } = this.props;
    console.log(postid, users.username, comments);
    // onAddComment(postid, comments, users.username);
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    this.setState({ comments: value });
  };

  render() {
    const { comments } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Inputs
          type="text"
          name="comments"
          onChange={this.handleChange}
          value={comments}
          placeholder="Add a comment...."
          autoComplete="off"
        />
        <SendBtn type="submit" disabled={comments.length === 0}>
          <FaPaperPlane />
        </SendBtn>
      </form>
    );
  }
}

export default CommentForm;
