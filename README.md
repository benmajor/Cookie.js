## 1. Introduction
A lightweight cookie library written in JavaScript. It is designed to make interacting with cookies via Javascript easier and faster for the developer.

All functions can be called against the `Cookie` object, which exists in `window` scope.

## 2. Usage

Below is an example of retrieving a cookie whose name is `user_id`:

    Cookie.read('user_id'); // Returns '1';
## 3. Functions:

**`create(name, value, expires, path = '/')`:**
<br />Create a new cookie.

Arguments:
 - `name`: the name key for the cookie (e.g. `user_id`)
 - `value`: the value of the cookie (e.g. `1`)
 - `expires`: the number of days in which the cookie should expire
 - `path`: the path to store the cookie against (*optional*)
----

**`read(name)`:**
<br />Read the value of the cookie with the specified name.

Arguments:
 - `name`: the name of the cookie whose value to read.
 
Returns: (`string`) the cookie value.

----

**`isSet(name)`:**
<br />Check to see if a cookie with the specified name exists.

Arguments:
 - `name`: the name of the cookie to check.
 
Returns: (`bool`) `true` if the cookie exists, otherwise `false`.

----

**`erase(name)`:**
<br />Erase a cookie by its name.

Arguments:
 - `name`: the name of the cookie to erase.
