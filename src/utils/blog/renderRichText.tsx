import React from 'react';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';

const UnorderedList = ({ children }) => <ul className="pl-4 list-disc">{children}</ul>;
const OrderedList = ({ children }) => <ol className="pl-4 list-decimal">{children}</ol>;
const ListItem = ({ children }) => <li>{children}</li>;
const Paragraph = ({ children }) => <p>{children}</p>;

const options: Options = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => <UnorderedList>{children}</UnorderedList>,
    [BLOCKS.OL_LIST]: (node, children) => <OrderedList>{children}</OrderedList>,
    [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
  },
};

export const renderRichText = (content: Document) => {
  return documentToReactComponents(content, options);
};
