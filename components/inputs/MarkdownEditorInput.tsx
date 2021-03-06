import React from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';
import ReactMarkdown from 'react-markdown';

type MarkdownEditorInputProps = {
  label: string;
  id: string;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
};

export default function MarkdownEditorInput(props: MarkdownEditorInputProps) {
  const { label, id, handleTextChange, text } = props;

  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <Label for={id}>{label}</Label>
            <Input
              rows={15}
              onChange={handleTextChange}
              type="textarea"
              name={text}
              id={id}
              value={text}
            />
          </FormGroup>
        </Col>
        <Col>
          <Label>Markdown Preview</Label>
          {text ? <ReactMarkdown>{text}</ReactMarkdown> : null}
        </Col>
      </Row>
    </>
  );
}
