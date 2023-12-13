int main ()
{   
    int n; cin>>n; 
    vector<int>v;
    for(int i=0; i<n; i++)
    {
        int x; cin>>x;
        if(x>0)v.push_back(x);
    }
    int len=v.size();
    cout<<v[len/2];

}