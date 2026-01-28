import { Order } from "../schema/order.schema.js";
import { Product } from "../schema/product.schema.js";

export const createOrderController = async (req, res) => {
  try {
    let data = req.body;

    let orderQuantity = data.quantity; // User le pathako quantity req.body bata aayera orderQuantity ma return garcha
    const id = data.productId; // user le pathako productId req.body bata aayera id ma return garcha
    const product = await Product.findById(id); // user le pathako productId anushar ko euta Product ko details product variable ma return garcha

    if (orderQuantity > product.quantity) {
      //if the order quantity of user is greater than products quantity we need to respond user with error.
      res.status(400).json({
        message: "Order quantity is greater than product quantity",
      });
    } else {
      // else block is needed if the above condition is satisfied then only we'll need to create order in database and update product so inorder to avoid the data inconsistency we will use else block
      const order = await Order.create(data); // The order will only be created if the orderQuantity is not greater than products quantity

      const result = await Product.findByIdAndUpdate(
        // Order create bhayesi product uodate garcha rw product ko quantity lai orderQuantity sanga reduce garcha
        id,
        { quantity: product.quantity - orderQuantity },
        { new: true }
      );

      res.status(201).json({
        message: "Order created successfully",
        data: order,
        result: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Create getAllOrderController , getSpecificOrderController , updateSpecificOrderController deleteSpecificOrderController with reference to product controller
