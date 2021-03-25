import React from 'react';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';

const UnorderedList = ({ children }) => <ul className="pl-4 ml-2 list-disc list-outside">{children}</ul>;
const OrderedList = ({ children }) => <ol className="pl-4 ml-2 list-decimal list-outside">{children}</ol>;
const ListItem = ({ children }) => <li>{children}</li>;
const Paragraph = ({ children }) => <p className="min-h-6">{children}</p>;

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
