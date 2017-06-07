/*!
 * Cookie.js
 * by Ben Major
 *
 * Copyright 2017, Ben Major
 * Licensed under the MIT License:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

var Cookie =
{
    // Create a new cookie:
    create: function( name, value, expire, path )
    {
        var thePath = (path) ? path : '/',
            d       = new Date();
            
        d.setTime(d.getTime() + (expire * 86400000));
        
        document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path='+thePath;
    },
    
    // Get the value for a cookie:
    read: function( name )
    {
        var n  = name + '=',
            dc = decodeURIComponent(document.cookie),
            ca = dc.split(';');
            
        for( var i = 0; i < ca.length; i++ )
        {
            var c = ca[i];
            while( c.charAt(0) == ' ' ) { c = c.substring(1); }
            
            if( c.indexOf(n) == 0 )
            {
                return c.substring(n.length, c.length);
            }
        }
        
        return '';
    },
    
    // Checks if a cookie is already set:
    isSet: function( name )
    {
        return ( document.cookie.indexOf(name+'=') > -1 );
    },
    
    // Delete a cookie:
    erase: function( name )
    {
        this.create( name, '', -1);
    }
}
