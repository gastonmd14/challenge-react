import React from "react";
function Table() {
  return (
    <table>
      <tr>
        <td colspan="6">
          <h1>BALANCE</h1>
        </td>
      </tr>
      <tr>
        <td class="orden">ID</td>
        <td>DATE</td>
        <td class="categoria">CATEGORY</td>
        <td>TYPE</td>
        <td>CONCEPT</td>
        <td>AMOUNT</td>
        <td class="link">ACTION</td>
      </tr>

      <tr>
        <td colspan="1">TOTAL</td>
        <td>$ </td>
      </tr>
    </table>
  );
}

export default Table;
