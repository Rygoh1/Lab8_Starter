# Lab 8 - Starter
1. Within a Github action that runs whenever code is pushed 
This is so that code that is pushed is automaticallly tested. Running tests locally may not test if individual code works well with other code. Running all tests after all development is completed will make it hard to track down what causes the errors.

2. No

3. No, you would probably want to use E2E testing to check the UI for both the sender and recipient rather than just a simple unit test.

4. Yes, you would since you could easily make three test cases: < 80, > 80, and = 80 character messages. Maybe if there was a UI interface that pops up with a message too long warning then you would want E2E tests.