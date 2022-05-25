module.exports = function () {
  return async (context) => {
    const customerId = context.data.customerId;
    const customerService = context.app.service("customers");
    const customer = await customerService.get(customerId);
    context.data.customer = {
      _id: customer._id,
      name: customer.name,
      phone: customer.phone,
    };
    return context;
  };
};
