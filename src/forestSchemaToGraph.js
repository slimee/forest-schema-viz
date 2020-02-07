const SMART_ICON = '💫';
const ACTION_ICON = '🚀';
const digraph = {
  header: "digraph {" +

    "node [shape=record fontname=Helvetica fontsize=10]; ",
  footer: '}',
};

module.exports = (forestSchema) => {
  const collections = forestSchema.collections;
  let output = [digraph.header];
  collections.forEach(table => {

    const smart = table.isVirtual ? '(Smart) ' : '';
    const tableId = `${table.name}`;
    const tableLabel = `${smart?SMART_ICON:''} ${table.name}`;

    //Table
    let tableDef = [`${tableId} [label="${tableLabel}`];

    //+Attributes
    if (table.fields) {
      table.fields
        .forEach(field => {
          tableDef.push(`|<${tableId}.${field.field}> ${field.field} : ${field.type}`);
        });
    }
    //+Actions
    if (table.actions && table.actions.length) {
      table.actions
        .forEach(action => {
          tableDef.push(`|${ACTION_ICON} ${action.name} : ${action.type}`);
        });
    }

    tableDef.push('"];');
    output.push(tableDef.join(''));

    //links
    if (table.fields) {
      table.fields
        .filter(field => field.relationship === 'BelongsTo')
        .forEach(field => {
          const fromFieldName = field.field;
          const [toName, toFieldName] = field.reference.split('.');
          console.log(tableId, fromFieldName, "=>", toName, toFieldName);
          // a:f1 -> b
          output.push(`${tableId}:<${tableId}.${fromFieldName}> -> ${toName}; `);
          // output.push(`${table.name} -> ${toName} [labelType="html" label="<span>${fromFieldName}->${toFieldName}</span>"];`);
        });
    }

  });
  output.push(digraph.footer);
  return output.join('');
};


const test = "digraph {" +
  "rankdir=LR" +
  "    node [shape=record fontname=Helvetica fontsize=10 ];" +
  "    a [label=\"<f0> left|<f1> middle|<f2> right\"];" +
  "    b [label=\"<f0> one|<f1> two\"];" +
  "    c [label=\"helloworld| b |c|d|<l1>e| f| g | h\"];" +
  "    a:f1 -> b:f0;" +
  "    a:f2 -> c:l1;" +
  "}";