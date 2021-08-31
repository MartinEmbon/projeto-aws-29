 # Final Challenge

Develop a project using the API, and the groups will be divided into 3
presentations (on different dates for different stalls)!
The project should be the same for the 3 groups, what changes is the theme of the API that
they will pull, which must be related to each sponsor's market!!

# VTEX IO + AWS Challenge

Create an API for Active Sales Management on AWS - The Purpose of This
API is to manage customers who have registered for a lead or customers who
have already bought on e-commerce, making the after-sales team able to
contacting customers trying to make Active or UPSELL sales.

# Team 29 - Contributors

<img src= "https://media-exp1.licdn.com/dms/image/C4E03AQFITUDXWoikSg/profile-displayphoto-shrink_200_200/0/1543591748346?e=1635379200&v=beta&t=YFEuJeFL0I42l82nls0noH59Tq6Zs1wRMd2T2lmwdOI" width="60"> <img src= "https://avatars.githubusercontent.com/u/65916297?v=4" width="60"> <img src= "https://user-images.githubusercontent.com/84990084/131422281-c1b4a745-60e8-4eda-b6fb-83d224b086d2.png" width="60"> <img src= "https://media-exp1.licdn.com/dms/image/C4E03AQFsvArG2JywsQ/profile-displayphoto-shrink_200_200/0/1622832187835?e=1635379200&v=beta&t=TtncFtWIP2QCJxDdTucym8c25XD4-MSBvWOIxs7tAg0" width="60"> <img src= "https://avatars.githubusercontent.com/u/71203708?v=4" width="60"><img src= "https://avatars.githubusercontent.com/u/77815749?v=4" width="60"> <img src= "https://avatars.githubusercontent.com/u/87606686?v=4" width="60"> <img src= "https://avatars.githubusercontent.com/u/14866697?v=4" width="60"> <img src="https://avatars.githubusercontent.com/u/62761261?v=4" width="60"> <img src="https://avatars.githubusercontent.com/u/84990084?v=4" width="60"> 

# Requirements

- VTEX IO platform
- Boilerplate theme to create stores in the VTEX IO platform


# Minimum Boilerplate Theme

The minimum Boilerplate Theme is basic store front model based on the VTEX IO Store Framework.

It should be used only when you want to start a new store theme without any pre-set configurations, as is the case with [Store Theme](https://github.com/vtex-apps/store-theme). 

While Store Theme gives developers a ready-to-go default store front structure, the Minimum Boilerplate Theme will enable you to build you store freely from scratch.

## Configuration

### Step 1 -  Basic setup

Access the VTEX IO [basic setup guide](https://vtex.io/docs/getting-started/build-stores-with-store-framework/1) and follow all the given steps. 

By the end of the setup, you should have the VTEX command line interface (Toolbelt) installed along with a developer workspace you can work in.

### Step 2 - Cloning the Minimum Boilerplate Theme repository

[Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository to your local files to be able to effectively start working on it.

Then, access the repository's directory using your terminal. 

### Step 3 - Editing the `Manifest.json`

Once in the repository directory, it is time to edit the Minimum Boilerplate `manifest.json` file. 

Once you are in the file, you must replace the `vendor` and `account` values. `vendor` is the account name you are working on and `account` is anything you want to name your theme. For example:

```json
{
  "vendor": "storecomponents",
  "name": "my-test-theme",
}
```

### Step 4 -  Installing required apps

In order to use Store Framework and work on your store theme, it is needed to have both `vtex.store-sitemap` and `vtex.store` installed.

Run  `vtex list`  and check whether those apps are already installed. 

If they aren't, run the following command to install them: `vtex install vtex.store-sitemap vtex.store -f`

### Step 5 -  Uninstalling any existing theme

By running `vtex list`,  you can verify if any theme is installed.

It is common to already have a `vtex.store-theme`  installed when you start the store's front development process. 

Therefore, if you find it in the app's list, copy its name and use it together with the command `vtex uninstall`. For example:

```json
vtex uninstall vtex.store-theme
```

### Step 6- Run and preview your store

Then time has come to upload all the changes you made in your local files to the platform. For that, use the `vtex link` command. 

If the process runs without any errors, the following message will be displayed: `App linked successfully`. Then, run the `vtex browse` command to open a browser window having your linked store in it.

This will enable you to see the applied changes in real time, through the account and workspace in which you are working.
