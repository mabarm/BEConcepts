# The Factory Design Pattern:

    It is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. This pattern delegates the responsibility of instantiating objects to specific classes known as factories, ensuring that the code does not depend on the actual concrete classes of objects but only on their interfaces or abstract classes.

**Key Concepts:**

1. Factory Method: Defines a method for creating objects, but allows subclasses to decide which class to instantiate.
2. Decoupling: It decouples the client code from the specific classes it needs to instantiate.
3. Abstract Classes or Interfaces: Often used to define common behavior while letting concrete subclasses decide the exact implementation.
4. Polymorphism: It leverages polymorphism to make the code more flexible and extensible.

**Structure:**

- Product (Interface/Abstract Class): Defines the interface of the objects created by the factory.
- ConcreteProduct (Concrete Classes): Implements the Product interface.
- Creator (Factory Class): Declares the factory method that returns a Product object.
- ConcreteCreator (Concrete Factory): Overrides the factory method to return a specific ConcreteProduct instance.
