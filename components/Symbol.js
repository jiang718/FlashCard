import React, { Component } from "react";

const iconBtn = {
  background: "transparent",
  padding: 0
};
const smallIcon = {
  fontSize: 5
};
export const AddSymbol = () => (
  <button type="button" class="btn btn-outline-secondary btn-sm">
    <i class="fa fa-plus fa-xs" style={smallIcon} aria-hidden="true" />
  </button>
);

export const DeleteSymbol = () => (
  <button type="button" class="btn btn-outline-secondary btn-sm">
    <i class="fa fa-trash fa-xs" style={smallIcon} />
  </button>
);
